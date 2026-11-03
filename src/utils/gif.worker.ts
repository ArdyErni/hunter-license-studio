import { GIFEncoder, applyPalette, quantize } from 'gifenc'

type Request =
  | { type: 'init'; samples: Uint8ClampedArray; width: number; height: number }
  | { type: 'frame'; pixels: Uint8ClampedArray; index: number; delay: number }
  | { type: 'finish' }

const gif = GIFEncoder()
let palette: number[][]
let width = 0
let height = 0

self.onmessage = ({ data }: MessageEvent<Request>) => {
  try {
    if (data.type === 'init') {
      palette = quantize(data.samples, 256)
      width = data.width
      height = data.height
      self.postMessage({ type: 'ready' })
    } else if (data.type === 'frame') {
      gif.writeFrame(applyPalette(data.pixels, palette), width, height, {
        palette: data.index === 0 ? palette : undefined,
        delay: data.delay,
        repeat: 0,
        dispose: 1,
      })
      self.postMessage({ type: 'frame' })
    } else {
      gif.finish()
      const bytes = gif.bytes()
      self.postMessage({ type: 'done', buffer: bytes.buffer }, { transfer: [bytes.buffer] })
    }
  } catch (error) {
    self.postMessage({ type: 'error', message: error instanceof Error ? error.message : 'GIF encoding failed.' })
  }
}
