import { Box, Text, Heading, Container, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import PatientTab from '../components/PatientTab';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [totalTab, setTotalTab] = useState(3);

  const onClickAdd = () => {
    alert('Add');
  };

  return (
    <>
      <Head>
        <title>COVID Timeline Generator</title>
      </Head>
      <Box bg='bg' color='fontColor'>
        <Container maxW='container.xl' pt='8'>
          <Center mb='8'>
            <Heading color='opnYellow'>COVID Timeline Generator</Heading>
          </Center>
          <PatientTab
            currentTab={currentTab}
            total={totalTab}
            onClickAdd={onClickAdd}
          />
        </Container>
      </Box>
    </>
  );
};

export default Home;
