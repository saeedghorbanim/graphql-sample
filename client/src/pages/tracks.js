import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client'
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

const TRACKS = gql `
  query GetTracks {
    tracksForHome {
      id
      length
      modulesCount
      thumbnail
      title
      author {
        id
        name
        phot
      }
    }
  }`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data} = useQuery(TRACKS);




  return (
  <Layout grid> 
    <QueryResult loading={loading} error={error} data={data}>{
        data?.tracksForHome?.map((track) => (
            <TrackCard track={track} />
        ))} 
    </QueryResult>
  </Layout>
  );
};

export default Tracks;
