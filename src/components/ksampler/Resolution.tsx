import {Component} from "react";
import {Button, ButtonGroup, Center, Flex, Heading, Input} from "@chakra-ui/react";


type ResolutionState = {
    width: number;
    height: number;
};
type ResoultionProps = {
    width: number;
    height: number;
    onResolutionChange: (width: number, height: number) => void;
};

export class Resolution extends Component<ResoultionProps, ResolutionState> {
    constructor(props: ResoultionProps) {
        super(props);
        // Set the initial state
        this.state = {
            width: 1024,
            height: 1024,
        };
    }


    handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newWidth = Number(event.target.value);
        this.setState({width: newWidth});
        // @ts-ignore
        this.props.onResolutionChange(newWidth, this.state.height);
    };

    handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(event.target.value);
        this.setState({height: newHeight});
        // @ts-ignore
        this.props.onResolutionChange(this.state.width, newHeight);
    };

    handleResolutionChange = (resolutionString : string) => {
        const [newWidth, newHeight] = resolutionString.split(' x ').map(Number);
        this.setState({ width: newWidth, height: newHeight });
        // @ts-ignore
        this.props.onResolutionChange(newWidth, newHeight);
    }

    render() {
        const {width, height} = this.state; // Destructuring state for easier access

        return (
            <Flex
                flexDir={'column'}
                justifyContent={'space-around'}
                bg={'gray.100'}
                w={'100%'}
                p={5}
                rounded={'10px'}
                boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                <Center w={'100%'}>
                    <Heading fontSize={'1.6em'} pb={2} px={5} color={'gray.700'}>Resolution</Heading>
                </Center>

                <Flex flexDir={'row'}>
                    <Flex w={'100%'} justifyContent={'space-around'} px={5} flexDir={'column'}
                          rounded={'10px'}>
                        <Center>
                            <Input
                                type="number"
                                value={width}
                                min={768}
                                onChange={this.handleWidthChange}
                                textAlign={'center'} fontWeight={'semibold'} fontSize={'1.2em'}
                                color={'gray.900'} bg={'#f6f8fc'}
                                shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}>
                            </Input>
                        </Center>
                    </Flex>
                    <Center fontWeight={'semibold'} color={'gray.700'} fontSize={'1.5em'} my={0}>
                        x
                    </Center>
                    <Flex w={'100%'} justifyContent={'space-around'} px={5} flexDir={'column'}
                          bg={'gray.100'} rounded={'10px'}>
                        <Center>
                            <Input
                                type="number"
                                value={height}
                                min={768}
                                onChange={this.handleHeightChange}
                                textAlign={'center'} fontWeight={'semibold'} fontSize={'1.2em'}
                                color={'gray.900'} bg={'#f6f8fc'}
                                shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}>
                            </Input>
                        </Center>
                    </Flex>
                </Flex>
                <Flex justifyContent={'center'} pt={4}>
                    <ButtonGroup>
                        <Button
                            bg={'gray.300'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'} me={1}
                            onClick={() => this.handleResolutionChange('768 x 1344')}>Portrait</Button>
                        <Button
                            bg={'gray.300'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'} me={1}
                            onClick={() => this.handleResolutionChange('1344 x 768')}>Landscape</Button>
                        <Button
                            bg={'gray.300'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                            onClick={() => this.handleResolutionChange('1024 x 1024')}>Square</Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
        )
    }
}

