import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useAppDispatch} from "../../hook";
import {postNewSubscriberAsync} from "../../store/slices/subscriptionSlice/postNewSubscriber";
import {getSubscriberAsync} from "../../store/slices/subscriptionSlice/getSubscriber";

const Account = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    if (!id) {
        return <div>Loading...</div>; // Либо другая обработка, если id отсутствует
    }

    return (
        <div>
            user {id}

            <button onClick={()=> dispatch(postNewSubscriberAsync(id))}>Subscribe</button>
        </div>
    );
};

export default Account;