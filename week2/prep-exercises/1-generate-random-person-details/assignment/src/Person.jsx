

const Person = ({ person }) => {
  const { name: { first: firstName, last: lastName }, email } = person;
  return (
    <>
      <div className="user-container">
          <ul>
            <li>First Name: { firstName}</li>
            <li>Last Name: { lastName }</li>
            <li>Email: { email }</li>
          </ul>
      </div>
    </>
  );
};

export default Person;
