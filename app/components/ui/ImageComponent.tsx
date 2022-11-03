import Image from 'antd/lib/image'
import { FC } from 'react'

import { getApiImagePath } from 'helpers/getApiImagePath'
import { DEFAULT_IMAGE_FALLBACK } from 'utils/constants/app'

export const ImageComponent: FC<Props> = ({ imagePath, preview = false, alt }) => (
  <Image
    src={(imagePath && getApiImagePath(imagePath)) || undefined}
    fallback={DEFAULT_IMAGE_FALLBACK}
    preview={preview}
    alt={alt || 'Image'}
  />
)

interface Props {
  imagePath: string | null
  preview?: boolean
  alt?: string
}
