import React from 'react';
import {
  Box,
  Input,
  Textarea,
  Text,
  HStack,
  Select,
  Button,
} from '@chakra-ui/react';

const TimeLineForm = ({ register, onAddEntry }) => {
  return (
    <Box border='solid 1px #999' p='4' borderRadius='sm'>
      <HStack spacing='4' mb='4'>
        <Box>
          <Text>From</Text>
          <Input
            bg='white'
            color='black'
            type='datetime-local'
            {...register('from')}
          />
        </Box>
        <Box>
          <Text>To</Text>
          <Input bg='white' color='black' type='time' {...register('to')} />
        </Box>
      </HStack>
      <Text>Detail</Text>
      <Textarea
        rows={4}
        bg='white'
        color='black'
        mb='4'
        {...register('detail')}
      />
      <HStack mb='4' spacing='4'>
        <Box>
          <Text>Location Type</Text>
          <Select bg='white' color='black' {...register('location_type')}>
            <option value='INDOOR'>Indoor</option>
            <option value='OUTDOOR'>Outdoor</option>
            <option value='HOME'>Home</option>
            <option value='TRAVELLING'>Travelling</option>
          </Select>
        </Box>
        <Box>
          <Text>Location Name</Text>
          <Input bg='white' color='black' {...register('location_name')} />
        </Box>
      </HStack>
      <Button bg='opnYellow' w='100%' color='black' onClick={onAddEntry}>
        + Add Entry
      </Button>
    </Box>
  );
};

export default TimeLineForm;
