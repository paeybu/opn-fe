import React from 'react';
import {
  HStack,
  Heading,
  Button,
  Box,
  Text,
  Select,
  Input,
} from '@chakra-ui/react';
import { iPatientData } from '../pages';

const PatientInfo = ({ data }: iPatientData) => {
  return (
    <>
      <HStack justifyContent='space-between'>
        <Heading color='opnYellow' mb='4'>
          Patient Information
        </Heading>
        <Button colorScheme='red'>Remove Patient</Button>
      </HStack>

      <Box border='solid 1px #999' p='4' borderRadius='sm'>
        <HStack spacing='8'>
          <Box flex='2'>
            <Text>Gender</Text>
            <Select
              placeholder='Select Gender'
              bg='white'
              color='black'
              value={data?.gender}
            >
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </Select>
          </Box>
          <Box flex='1'>
            <Text>Age</Text>
            <Input
              value={data?.age}
              bg='white'
              color='black'
              type='number'
              placeholder='Input age'
            />
          </Box>
          <Box flex='6'>
            <Text>Occupation</Text>
            <Input
              value={data?.occupation}
              bg='white'
              color='black'
              placeholder='Input occupation'
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default PatientInfo;
