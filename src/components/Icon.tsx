type Props = {
  image: string;
}

const Icon = (props: Props) => {
  return (
    <div>
      <img src={`/src/assets/icons/${props.image}`} alt="" />
    </div>
  )
}

export default Icon;