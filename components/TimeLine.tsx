import React from 'react';
import { Heading, Box, Center, Text, VStack, HStack } from '@chakra-ui/react';
import { iPatientData } from '../pages';
import TimeLineData from './TimeLineData';
import TimeLineForm from './TimeLineForm';

const TimeLine = ({ data, age, occupation, gender }) => {
  const { locations } = data || {};
  return (
    <>
      <Heading color='opnYellow' mb='4'>
        Timeline
      </Heading>
      <HStack alignItems='flex-start' spacing='8'>
        <Box border='solid 1px #ffc107' p='4' borderRadius='sm' flex='4'>
          <Center>
            <Center
              mb='4'
              bg='opnYellow'
              borderRadius='60px'
              p='4'
              color='black'
              w='200px'
            >
              <VStack spacing='0'>
                <Text>{data?.gender || gender}</Text>
                <Text fontSize='xl' fontWeight='bold'>
                  {data?.age || age} years old
                </Text>
                <Text>{data?.occupation || occupation}</Text>
              </VStack>
            </Center>
          </Center>
          {locations?.map((loc) => (
            <VStack key={loc?.location}>
              <TimeLineData data={loc} />
            </VStack>
          ))}
          <Heading size='md' color='opnYellow'>
            Visited Places
          </Heading>
          <HStack>
            {locations?.map((loc) => (
              <Text key={loc?._id}>{loc?.location}</Text>
            ))}
          </HStack>
        </Box>
        <Box flex='2'>
          <TimeLineForm />
        </Box>
      </HStack>
    </>
  );
};

export default TimeLine;
