import { FC } from 'react';
import { useAppSelector } from '../../hook';
import Container from '../../uiComponent/Container/Container';
import Profile from '../../components/MyAccountComponent/Profile/Profile';
import styles from './MyAccount.module.scss';

const MyAccount: FC = () => {
    const { loading } = useAppSelector(state => state.auth);

    return (
        <Container
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
            {loading ? <Profile /> : <div>Loading...</div>}
        </Container>
    );
};

export default MyAccount;
