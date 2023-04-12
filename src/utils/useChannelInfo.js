import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_INFO } from "./constants";

const useChannelInfo = (channelId) => {

    // const [ channelld, setChannelId ] = useState("");
    const [ channelInfo, setChannelInfo ] = useState({});

    useEffect(() => {
        getChannelInfo();
    }, [])

    // const setId = (Id) => {
    //     setChannelId(Id);
    // }

    const getChannelInfo = async () => {
        console.log(channelId);
        const data = await fetch(YOUTUBE_CHANNEL_INFO.replace("CHANNEL_ID", channelId));
        const json = await data.json();
        console.log(json);
        setChannelInfo(json);
    }

    // return [channelInfor, setChannelId];
    return channelInfo;
};


export default useChannelInfo;