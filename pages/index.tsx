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
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import PatientTab from '../components/PatientTab';
import styles from '../styles/Home.module.css';
import { getPatients } from '../services/patientService';
import PatientInfo from '../components/PatientInfo';
import TimeLine from '../components/TimeLine';
import { useForm } from 'react-hook-form';

export interface iPatientData {
  gender: string;
  age: number;
  occupation: string;
  locations: any;
}

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [locations, setLocations] = useState([]);
  const [totalTab, setTotalTab] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const onClickAdd = () => {
    setTotalTab((cur) => cur + 1);
  };

  const onAddEntry = () => {
    const { from, to, detail, location_type, location_name } = watch();
    setLocations([
      ...locations,
      {
        from,
        to,
        detail,
        location_type,
        location_name,
      },
    ]);
  };

  const removeTab = () => setTotalTab((cur) => cur - 1);

  return (
    <>
      <Head>
        <title>COVID Timeline Generator</title>
      </Head>
      <Box bg='bg' color='fontColor'>
        <Container maxW='container.xl' pt='8' minH='100vh'>
          <Center mb='8'>
            <Heading color='opnYellow'>COVID Timeline Generator</Heading>
          </Center>
          <Tabs colorScheme='yellow' variant='enclosed'>
            <HStack align='flex-start'>
              <TabList>
                {Array.from(Array(totalTab)).map((x, i) => (
                  <Tab>Patient {i + 1}</Tab>
                ))}
              </TabList>
              <Center
                bg='#eee'
                borderRadius='50%'
                color='black'
                w='20px'
                h='20px'
                cursor='pointer'
                position='relative'
                top='12px'
                onClick={onClickAdd}
              >
                +
              </Center>
            </HStack>
            <TabPanels>
              {Array.from(Array(totalTab)).map((x, i) => (
                <TabPanel>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <PatientInfo
                      register={register}
                      i={i}
                      removeTab={removeTab}
                    />
                    <TimeLine
                      onAddEntry={onAddEntry}
                      watch={watch}
                      register={register}
                      locations={locations}
                      i={i}
                    />
                    <Button colorScheme='yellow' type='submit'>
                      Submit
                    </Button>
                  </form>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};

export default Home;
