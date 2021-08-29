import { Box, Flex, HStack, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import FrakButton from "../button";
import { useWeb3Context } from "../../contexts/Web3Context";
import { shortenHash } from "../../utils/helpers";

const Header = () => {
  const { connectWeb3, account } = useWeb3Context();
  return (
    <Box minH='10rem' py='2.6rem' as='header' bg={"white"}>
      <Flex maxW='96.4rem' mx='auto' as='nav' justify='space-between'>
        <HStack spacing='8'>
          <NextLink href='/'>
            <Link>
              <Image src='/logo.svg' alt='logo' width='75px' />
            </Link>
          </NextLink>
        </HStack>
        <Flex align='center'>
          <HStack
            spacing='3.2rem'
            mr='3.2rem'
            display={{ base: "none", md: "flex" }}
          >
            <NextLink href='/mint-nft'>
              <Link className='semi-16'>Mint NFT</Link>
            </NextLink>
            <NextLink href='/'>
              <Link className='semi-16'>Marketplace</Link>
            </NextLink>
            <NextLink href='/artists'>
              <Link className='semi-16'>Artists</Link>
            </NextLink>
            <a href='https://app.daohaus.club/dao/0x4/0x721c1016044a7bd95332601bcbcf889f958be5b2' target='_blank' rel='noopener noreferrer'>
              <Link className='semi-16'>DAO</Link>
            </a>
          </HStack>
          {!account ? (
            <FrakButton onClick={connectWeb3}>Connect Wallet</FrakButton>
          ) : (
            <NextLink href='/my-nfts'>
              <FrakButton isOutlined>
                {shortenHash(account)} | View my NFTs
              </FrakButton>
            </NextLink>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
