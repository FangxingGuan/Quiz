import { toPng } from 'html-to-image'

export async function captureElement(element: HTMLElement): Promise<Blob> {
  const dataUrl = await toPng(element, {
    pixelRatio: 2,
    cacheBust: true,
  })
  const res = await fetch(dataUrl)
  return res.blob()
}

export async function shareImage(blob: Blob, title: string): Promise<boolean> {
  const file = new File([blob], 'quiz-result.png', { type: 'image/png' })

  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({
        title,
        text: `Check out my quiz result: ${title}`,
        files: [file],
      })
      return true
    } catch {
      // User cancelled or share failed, fall through to download
    }
  }
  return false
}

export function downloadImage(blob: Blob, filename: string = 'quiz-result.png'): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
