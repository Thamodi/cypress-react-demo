
const ContactData = ({comment,email}) => {

 // const contactDetails = useSelector(state => state.submitContactDetailsReducer.contactDetails);

  return (
    <div>
      <h1>Questions & Concerns</h1>
      <div>
        <h2>Comment:</h2>
        <p>{comment}</p>
      </div>
      <div>
        <h2>Email:</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactData;