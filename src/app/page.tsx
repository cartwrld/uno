'use client'

import styles from './page.module.css'
import {Box, Button, Center, Container, Divider, Flex, Heading, RadioGroup, Stack} from "@chakra-ui/react";

import React, {useState} from "react";
import {UnoCard} from "@/components/UnoCard";

export default function Home() {



    return (

        <main className={styles.main}>
            <Flex flexDir={'row'} justifyContent={'center'} w={'98%'} alignItems={'center'} flexWrap={'wrap'}>
                <UnoCard num={1} color={'red'} />
                <UnoCard num={2} color={'blue'} />
                <UnoCard num={3} color={'green'} />
                <UnoCard num={4} color={'yellow'} />
                <UnoCard num={5} color={'red'} />
                <UnoCard num={6} color={'blue'} />
                <UnoCard num={7} color={'green'} />
                <UnoCard num={8} color={'yellow'} />
                <UnoCard color={'black'} action={'recolor'}/>
                <UnoCard num={9} color={'black'}/>
                <UnoCard num={9} color={'red'} />
                <UnoCard num={9} color={'red'} />
                <UnoCard num={9} color={'red'} />
            </Flex>
        </main>

    );
}



function retrieveExistingMachinesFromDB() {

}
function retrieveAllMachinesFromDB() {

}
