import homemLindoImage from '../../assets/homem-lindo.jpg'

type UserImageProps = {
  width: 'w-20' | 'w-24'
  height: 'h-20' | 'h-24'
}

export function Image({ height, width }: UserImageProps) {
  return (
    <img
      src={homemLindoImage}
      alt="Homem lindo"
      className={`${width} ${height} rounded-full border-2 border-blue-400`}
    />
  )
}
