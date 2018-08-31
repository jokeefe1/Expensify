import React from "react";

const Info = props => (
  <div>
    <h3>Info</h3>
    <p>Here is some private info: {props.info}</p>
  </div>
);

const Info2 = props => (
  <div>
    <h3>Info 2</h3>
    <p>
      Here is some priviledged info:
      {props.isAdmin ? (
        props.info
      ) : (
        <p>You must be an admin to view this information!</p>
      )}
    </p>
  </div>
);

const Info3 = props => (
  <div>
    <h3>Welcom: {props.isAuth}</h3>
    {props.isAuth === "admin" ? <p>Administrator</p> : <p>User</p>}
    {props.isAuth === "admin" ? (
      <p>Here is the sensitive info</p>
    ) : (
      <p>You need to be logged in as an administrator to see more.</p>
    )}
  </div>
);

const WithAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>This is private please do not share.</p>
      <WrappedComponent isAdmin={false} info={<p>These are the details</p>} />
    </div>
  );
};

const RequireAuthentication = WrappedComponent => {
  return props => <WrappedComponent isAuth="user" />;
};

const AdminInfo = WithAdminWarning(Info2);
const AuthInfo = RequireAuthentication(Info3);

export default AuthInfo;
