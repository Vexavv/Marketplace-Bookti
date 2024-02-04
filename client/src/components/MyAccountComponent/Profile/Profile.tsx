import { FC } from 'react';
import GoBack from './GoBack/GoBack';
import MyProfile from './MyProfile/MyProfile';
import ProfileBookShelf from './ProfileBookShelf/ProfileBookShelf';

const Profile: FC = () => {
    return (
        <>
            <GoBack />
            <MyProfile />
            <ProfileBookShelf books={[]} />
        </>
    );
};

export default Profile;
