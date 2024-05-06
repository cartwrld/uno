import {Component} from "react";
import {Box, Center, Flex, Heading, Select} from "@chakra-ui/react";


type UnoCardState = {}

type UnoCardProps = {
    color: string
    num?: number
    action?: string
}

export class UnoCard extends Component<UnoCardProps, UnoCardState> {

    constructor(props: UnoCardProps) {
        super(props);

        this.state = {
            ckptValue: 'dynavision_v0557.safetensors',
        };
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

    handleAction(c: string) {
        switch (c) {
            case 'recolor':
                return '#cc1631'
            case 'skip':
                return '#0f5dd5'
            case 'rev':
                return '#00d062'
            case 'pu2':
                return '#ffcc00'
            case 'pu4':
                return '#212121'
        }
    }

    CardNumber(number: number, rotation: number) {
        return (
            number === 9
                ? <Flex flexDir={'column'}>
                    <Center transform={`rotate(${rotation}deg)`} fontSize={'4.3em'} fontWeight={'bold'} fontStyle={'italic'}
                            pt={'210px'} pe={'15px'} sx={{WebkitTextStroke: `2px black`, color: `white`}}
                            textShadow={'4px 3px 0 black'}>
                        <Flex flexDir={'column'}>
                            <Center mb={'-30px'} pt={'5px'}>{number}</Center>
                            <Center bg={'white'} lineHeight={0} fontSize={'4.3rem'} fontWeight={'bold'} fontStyle={'italic'}
                                    sx={{WebkitTextStroke: `2px black`, color: `white`}} p={0} m={0} ml={2}
                                    mt={'-20px'}>_</Center>
                        </Flex>
                    </Center>
                </Flex>
                :
                <Center transform={`rotate(${rotation}deg)`} fontSize={'4.3em'} fontWeight={'bold'} fontStyle={'italic'}
                        pt={'300px'} pe={'15px'} pb={3} sx={{
                    WebkitTextStroke: `2px black`,
                    color: `white`
                }} textShadow={'4px 3px 0 black'}>
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
                {/* colored base containing top left number, bottom right number, and container for the middle number */}
                <Flex justifyContent={'center'} alignItems={'center'} w={'280px'} h={'380px'} bg={c}
                      boxShadow={'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'}
                      borderRadius={'10px'}>
                    {
                        num !== undefined
                            ?
                            <>
                                {this.CardNumber(num, 180)}
                                <Flex justifyContent={'center'} alignItems={'center'} w={'175px'} h={'350px'}
                                      bg={'ghostwhite'} border={`10px solid ${c}`} borderRadius={'50%'}
                                      transform={'rotate(30deg)'}
                                      boxShadow={'5px 5px 8px rgba(0,0,0,0.1), -5px -5px 8px rgba(0,0,0,0.1),inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'}>

                                    <Center transform={'rotate(-30deg)'} fontSize={'9em'} fontWeight={'bold'}
                                            fontStyle={'italic'}
                                            sx={{
                                                WebkitTextStroke: `3px black`,
                                                color: `${c}`

                                            }} textShadow={'7px 3px 0 black'} pr={3}>
                                        {num}
                                    </Center>
                                </Flex>
                                {this.CardNumber(num, 0)}
                            </>
                            : <Center border={`10px solid white`} transform={'rotate(30deg)' } w={'175px'} h={'350px'}  borderRadius={'50%'}>
                                <Flex justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}
                                    w={'175px'} h={'350px'} bg={'ghostwhite'} borderRadius={'50%'}
                                    // sx={{clipPath: 'ellipse(40% 150px);'}}
                                    sx={{clipPath: 'ellipse(50% 167px);'}}
                                    boxShadow={'5px 5px 8px rgba(0,0,0,0.1), -5px -5px 8px rgba(0,0,0,0.1), inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'}>
                                <Box w={'50%'} h={'50%'} boxShadow={'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'} borderTopLeftRadius={'175px'} bg={`${this.handleColor('red')}`}></Box>
                                <Box w={'50%'} h={'50%'} boxShadow={'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'} borderTopRightRadius={'175px'} bg={`${this.handleColor('blue')}`}></Box>
                                <Box w={'50%'} h={'50%'} boxShadow={'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'} borderBottomLeftRadius={'175px'} bg={`${this.handleColor('green')}`}></Box>
                                <Box w={'50%'} h={'50%'} boxShadow={'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px rgba(0,0,0,0.1)'} borderBottomRightRadius={'175px'} bg={`${this.handleColor('yellow')}`}></Box>
                            </Flex>
                            </Center>
                    }

                </Flex>
            </Flex>
        )
    }

}
