import {Component} from "react";
import {Box, Center, Flex, Heading, Select} from "@chakra-ui/react";


type UnoCardState = {}

type UnoCardProps = {
    num: number
    color: string
}

export class ActionCard extends Component<UnoCardProps, UnoCardState> {

    constructor(props: UnoCardProps) {
        super(props);
    }

    handleColor(c: string) {
        switch (c) {
            case 'red':
                return '#cc1631'
            case 'blue':
                return '#0f5dd5'
            case 'green':
                return '#00d062'
            case 'yellow':
                return '#ffcc00'
            case 'black':
                return '#212121'
        }
    }

    CardSymbol(number: number, rotation: number) {
        return (
            <Center transform={`rotate(${rotation}deg)`}  fontSize={'4.3em'} fontWeight={'bold'} fontStyle={'italic'} pt={'300px'} pe={'15px'} pb={3}
                    sx={{ WebkitTextStroke: `2px black`, color: `white` }} textShadow={'4px 3px 0 black'}>
                {number}
            </Center>
        )
    }


    render() {

        let {num, color} = this.props
        const c = this.handleColor(color)

        return (
            <Flex p={'10px'} bg={'white'} borderRadius={'15px'} m={'10px'}
                  boxShadow={'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'}>
                <Flex justifyContent={'center'} alignItems={'center'} w={'280px'} h={'380px'} bg={c}
                      boxShadow={'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'}
                      borderRadius={'10px'}>
                    {this.CardNumber(num, 180)}
                    <Flex justifyContent={'center'} alignItems={'center'} w={'175px'} h={'350px'} bg={'ghostwhite'}
                          borderRadius={'50%'} transform={'rotate(30deg)'} border={`10px solid ${c}`}
                          boxShadow={'5px 5px 8px rgba(0,0,0,0.1), -5px -5px 8px rgba(0,0,0,0.1),inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'}>
                        <Center transform={'rotate(-30deg)'} fontSize={'9em'} fontWeight={'bold'} fontStyle={'italic'}
                                sx={{
                                    WebkitTextStroke: `3px black`,
                                    color: `${c}`
                                }} textShadow={'7px 3px 0 black'} pr={3}>
                            {num}
                        </Center>
                    </Flex>
                    {this.CardNumber(num, 0)}
                </Flex>
            </Flex>
        )
    }


}
