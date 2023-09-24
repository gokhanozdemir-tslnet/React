const MyFuncComp = (props) => {
  const { mydata } = props;
  console.log(props);
  return (
    <div>
      <div>mydata: {mydata}</div>
    </div>
  );
};

export default MyFuncComp;
