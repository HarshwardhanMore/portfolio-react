type Props = {
  image: string;
}

const Icon = (props: Props) => {
  return (
    <div>
      <img src={`/src/assets/icons/${props.image}`} alt="" className="w-[19px] aspect-square object-contain rounded-sm" />
    </div>
  )
}

export default Icon;