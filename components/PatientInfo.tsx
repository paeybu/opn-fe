import React from 'react';
import {
  HStack,
  Heading,
  Button,
  Box,
  Text,
  Select,
  Input,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { iPatientData } from '../pages';
import { removePatient } from '../services/patientService';

const PatientInfo = ({
  data,
  gender,
  age,
  occupation,
  setGender,
  setAge,
  setOccupation,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <HStack justifyContent='space-between'>
        <Heading color='opnYellow' mb='4'>
          Patient Information
        </Heading>
        <Button colorScheme='red' onClick={onOpen}>
          Remove Patient
        </Button>
      </HStack>

      <Box border='solid 1px #999' p='4' borderRadius='sm'>
        <HStack spacing='8'>
          <Box flex='2'>
            <Text>Gender</Text>
            <Select
              onChange={(e) => setGender(e.target.value)}
              placeholder='Select Gender'
              bg='white'
              color='black'
              value={data?.gender || gender}
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
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <Box flex='6'>
            <Text>Occupation</Text>
            <Input
              value={data?.occupation}
              bg='white'
              color='black'
              placeholder='Input occupation'
              onChange={(e) => setOccupation(e.target.value)}
            />
          </Box>
        </HStack>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Patient
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='red'
                onClick={async () => await removePatient(data?._id)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default PatientInfo;
