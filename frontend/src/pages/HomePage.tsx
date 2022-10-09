import React from 'react';
import { Stack, GridItem, Grid, Button, Heading, List, ListItem } from '@chakra-ui/react';
import { useBreakpointValue, useTheme } from '@chakra-ui/react';

// COMPONENTS
import { Card } from '../component/Card';
import { Line } from '../component/Line';
import { LiveMatch } from '../component/LiveMatch';

// HOOKS
import { usePageTitle } from '../hooks/usePageTitle';

// CONSTANTS
import { pagesContent } from '../constants';

// API
import UserInfo from '../api/userInfo';
import { GlobalContext } from '../State/GlobalProvider';
import { Loading } from '../component/Loading';

const HomePage = () => {
    // page title
    usePageTitle(pagesContent.profile.title);

    // breakpoint
    const profileInfo = useBreakpointValue({ xl: 4, base: 12 });
    const statusInfo = useBreakpointValue({ xl: 8, base: 12 });
    const marginBottom = useBreakpointValue({ md: 0, base: 10 });

    // get the data
    const { loader } = React.useContext<any>(GlobalContext);

    // const get the user info;
    UserInfo();

    // garbage value [FOR TEST]<----------------------------------------
    const matchs = [
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
        {
            opponenOneName: 'el mehdi mallah',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/emallah.jpg',
            opponenOneUsername: 'emallah',
            opponenTwoName: 'ayoub maatouch',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/aymaatou.jpg',
            opponenTwoUsername: 'aymaatou',
            link: '/',
        },
        {
            opponenOneName: 'youssef noam',
            opponenOnePhoto: 'https://cdn.intra.42.fr/users/ynoam.jpg',
            opponenOneUsername: 'ynoam',
            opponenTwoName: 'marouan ougnou',
            opponenTwoPhoto: 'https://cdn.intra.42.fr/users/mougnou.jpg',
            opponenTwoUsername: 'mougnou',
            link: '/',
        },
    ];
    // garbage value [FOR TEST]<----------------------------------------

    return (
        <>
            {loader && <Loading />}
            <Card w="100%" h="100%">
                <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={16}>
                    <GridItem colSpan={profileInfo} mb={marginBottom} my="auto">
                        <Stack spacing={5} alignItems="center">
                            <Stack spacing={2} alignItems="center" w="100%">
                                <Heading fontSize="xl">Play</Heading>
                                <Line maxW="7rem" />
                            </Stack>
                            <Button
                                variant="solid"
                                bg="green"
                                color="blackAlpha.900"
                                borderRadius="2xl"
                                fontSize="xl"
                                size="xl"
                                py={2}
                                px={5}
                                fontWeight="light"
                                _focus={{
                                    bg: 'green',
                                }}
                                _hover={{
                                    bg: 'green',
                                }}
                            >
                                Join Queues
                            </Button>
                            <Button
                                variant="solid"
                                bg="green"
                                color="blackAlpha.900"
                                borderRadius="2xl"
                                fontSize="xl"
                                size="xl"
                                py={2}
                                px={5}
                                fontWeight="light"
                                _focus={{
                                    bg: 'green',
                                }}
                                _hover={{
                                    bg: 'green',
                                }}
                            >
                                Play with Friend
                            </Button>
                        </Stack>
                    </GridItem>

                    <GridItem colSpan={statusInfo} h="100%" overflow="auto">
                        <Stack spacing={5} alignItems="center">
                            <Stack spacing={2} alignItems="center" w="100%">
                                <Heading fontSize="xl">Live Matches</Heading>
                                <Line maxW="7rem" />
                            </Stack>
                            <Stack p={2}>
                                <List spacing={5}>
                                    {matchs.map((item, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <LiveMatch match={item} />
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Stack>
                        </Stack>
                    </GridItem>
                </Grid>
            </Card>
        </>
    );
};

export default HomePage;
