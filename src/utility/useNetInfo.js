import { useEffect, useState } from 'react';
import  NetInfo  from "@react-native-community/netinfo";


export  function useNetInfo()  {

const [isInternetReachable, setIsInternetReachable] = useState(false)

    useEffect(() => {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsInternetReachable(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    },[])

return [isInternetReachable];

};