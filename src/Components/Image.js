function Avatar(props) {
    return (
      <img
      width="100" height="100"
        src={props.avatarUrl}
        alt={props.name}
      />
    );
  }


  export default Avatar;
