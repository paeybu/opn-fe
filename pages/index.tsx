import {
  Box,
  Text,
  Heading,
  Container,
  Center,
  Skeleton,
  Select,
  VStack,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import PatientTab from '../components/PatientTab';
import styles from '../styles/Home.module.css';
import { getPatients } from '../services/patientService';
import PatientInfo from '../components/PatientInfo';
import TimeLine from '../components/TimeLine';

export interface iPatientData {
  gender: string;
  age: number;
  occupation: string;
}

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [totalTab, setTotalTab] = useState(0);
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPatients();
      setPatientData(data);
    };

    fetch();
  }, []);

  useEffect(() => {
    setTotalTab(patientData.length);
  }, [patientData]);

  const onClickAdd = () => {
    alert('Add');
  };

  const currentPatientData: iPatientData = patientData[currentTab - 1];

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
          <Box mb='8'>
            <PatientTab
              currentTab={currentTab}
              total={totalTab}
              onClickAdd={onClickAdd}
            />
          </Box>
          <Box mb='4'>
            <PatientInfo data={currentPatientData} />
          </Box>
          <Box mb='4'>
            <TimeLine data={currentPatientData} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
