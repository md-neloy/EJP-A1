import Protected from "../component/Protected";

const Profile = () => {
  return (
    <Protected>
      <div>
        <div className="container mx-auto">welcome to my profile</div>
      </div>
    </Protected>
  );
};

export default Profile;
