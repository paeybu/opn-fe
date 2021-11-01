import React from 'react';
import { Heading, Box, Center, Text, VStack } from '@chakra-ui/react';
import { iPatientData } from '../pages';

const TimeLine = ({ data }: iPatientData) => {
  return (
    <>
      <Heading color='opnYellow' mb='4'>
        Patient Information
      </Heading>
      <Box border='solid 1px #999' p='4' borderRadius='sm'>
        {JSON.stringify(data)}
        <Center>
          <Center
            bg='opnYellow'
            borderRadius='60px'
            p='4'
            color='black'
            w='200px'
          >
            <VStack spacing='0'>
              <Text>{data?.gender}</Text>
              <Text fontSize='xl' fontWeight='bold'>
                {data?.age} years old
              </Text>
              <Text>{data?.occupation}</Text>
            </VStack>
          </Center>
        </Center>
      </Box>
    </>
  );
};

export default TimeLine;
