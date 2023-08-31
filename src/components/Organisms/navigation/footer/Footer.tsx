'use client'

import { Box } from '@mui/material';
import { Flex } from '@ui/Flex';
import Button from 'src/components/UI/Button';
import Text from 'src/components/UI/Text';
import { footerLinks } from 'src/lib/Constants/navLinks';
import useScreenSize from 'src/lib/hooks/useScreenSize';


export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> { }

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  const screenSize = useScreenSize();

  return (
    <footer {...footerProps}>
      <Flex
        className="w-full p-2"
        style={{
          borderWidth: "15px",
          borderTop: "15px solid #122B48",
        }}
      >
        <Box display="flex" flexDirection="column" flex={1}>
          <Text variant="body2" >
            Email: tiagofqaferreira@gmail.com
          </Text>
          <Text variant="body2" >
            Phone: +32494846838
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex={1}>
          <Button style={{ width: "50%" }} >CV</Button>
          <Text variant="body2" >Tiago Ferreira, Brussels 2023</Text>
        </Box>
        <Flex
          style={{ flex: 1 }}
        >
          {footerLinks.map((item) => {
            return (
              <Text variant="body2" key={item.id}>{item.text}</Text>
            );
          })}
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
