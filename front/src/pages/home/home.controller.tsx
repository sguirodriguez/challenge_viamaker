import request from '../../helpers/request';
import HomeScreen from './home.screen';
import { useEffect, useState } from 'react';

const HomeController = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoHighlight, setVideoHighlight] = useState({
    id: null,
    name: null,
    url: null,
    createdAt: null,
    updatedAt: null,
  });

  const handleGetVideos = async () => {
    setLoading(true);
    const { data, error } = await request({
      method: 'GET',
      path: 'videos',
    });
    setLoading(false);
    if (error) {
      return;
    }

    setVideoHighlight(data?.[0]);
    data?.shift();
    setVideos(data);
  };

  const handleChangeVideoHighlight = (values: {
    id: number;
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }) => {
    console.log('values', values);
  };

  useEffect(() => {
    handleGetVideos();
  }, []);

  const handlers = {
    videos,
    loading,
    videoHighlight,
    handleChangeVideoHighlight,
  };
  return <HomeScreen handlers={handlers} />;
};

export default HomeController;
