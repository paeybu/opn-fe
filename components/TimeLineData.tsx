import React from 'react';
import { HStack, Text, Box, Center, VStack, Flex } from '@chakra-ui/react';
import dayjs from 'dayjs';

interface iTimeLineData {
  location: string;
  locationType: string;
  detail: string;
  timeto: string;
  timefrom: string;
}

const Line = () => {
  return (
    <Box h='100%' w='1px' bg='#999' justifyContent='center'>
      <Box
        w='12px'
        h='12px'
        bg='opnYellow'
        borderRadius='50%'
        position='relative'
        right='6px'
        top='5px'
      ></Box>
    </Box>
  );
};

const TimeLineData = ({ data }: iTimeLineData) => {
  return (
    <>
      <HStack w='100%' mb='4'>
        <Text color='opnYellow'>
          {dayjs(data?.timefrom).format('DD/MM/YYYY')}
        </Text>
        <Line />
        <HStack
          bg='opnLightBlue'
          borderRadius='lg'
          p='4'
          flex='1'
          justifyContent='space-between'
        >
          <HStack>
            <Text color='opnYellow' mr='4'>
              {dayjs(data?.from).format('HH:mm')} - {data?.to}
            </Text>
            <VStack>
              <Text>{data?.detail}</Text>
              <Text color='opnBlue'>{data?.location_name}</Text>
            </VStack>
          </HStack>
          <Text color='white' ml='auto' cursor='pointer' p='4'>
            x
          </Text>
        </HStack>
      </HStack>
    </>
  );
};

export default TimeLineData;
