type UserImageProps = {
  width: 'w-20' | 'w-24'
  height: 'h-20' | 'h-24'
  src: string
}

export function Image({ height, width, src }: UserImageProps) {
  return (
    <img
      src={src}
      alt="Homem lindo"
      className={`${width} ${height} rounded-full border-2 border-white`}
    />
  )
}
