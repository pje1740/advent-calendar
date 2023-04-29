'use client'

import type { NextPage } from 'next'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <Card maxW={'sm'}>
        <CardHeader>
          <Heading size='md'>{new Date().toDateString()}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{'Day 01'}</Text>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
