import React from 'react';
import { HStack, Box, Text, Center, VStack } from '@chakra-ui/react';

interface IProps {
  currentTab: number;
  total: number;
  onClickAdd(): any;
  onClickTab(tab: number): any;
}

const PatientTab = ({ currentTab, total, onClickAdd, onClickTab }: IProps) => {
  const totalArr = Array.from({ length: total });
  return (
    <HStack>
      {totalArr.map((_, i) => (
        <Center
          key={i}
          border='solid 1px #999'
          w='100px'
          h='100px'
          borderRadius='sm'
        >
          <VStack cursor='pointer' onClick={() => onClickTab(i + 1)}>
            <Text>Patient</Text>
            <Text color='opnYellow' fontWeight='bold' fontSize='xl'>
              {i + 1}
            </Text>
          </VStack>
        </Center>
      ))}
      <Center w='100px' h='100px'>
        <Center
          w='50px'
          h='50px'
          fontSize='3xl'
          fontWeight='bold'
          cursor='pointer'
          borderRadius='50%'
          bg='#aaa'
          onClick={onClickAdd}
        >
          <Text position='relative' bottom='3px'>
            +
          </Text>
        </Center>
      </Center>
    </HStack>
  );
};

export default PatientTab;
