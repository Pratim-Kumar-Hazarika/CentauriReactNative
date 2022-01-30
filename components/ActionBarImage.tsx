/* eslint-disable */

import React from 'react';

import { View, Image, TouchableOpacity, Text } from 'react-native';
import Cart from './Cart';

const ActionBarImage = ({navigation}:any) => {
  return (
    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity  onPress={()=>navigation.navigate('Cart')}>
            <Image
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8UFBYAAADMzMwPDxGurq4UFBjq6ukrKyuOjo5nZ2cAAAQMDA8SEhQjIyT39/fd3d3w8PChoaHAwMDm5uZWVla6urrY2NhOTk7S0tJvb2/z8/NcXFwnJyd4eHjFxcWZmZlERESnp6cZGRpsbGw0NDSDg4M6OjpBQUOTk5SKioqBgYF3d3dZWVtJSUoeHh4IWsueAAAJt0lEQVR4nO2dC1f6OgzApVRAWHkoDxEQRPnj68L3/3Z3kzXpJBlDWIue/O6593pYncm6NmmSlqsrQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQfhVdEhCS3U++g+Kov25/CNKjpUyFYIo1vKxHlq6M9B5jiqkhglKLUPLdzpLxamXoNVDaAFP5lPxXRhjVDO0hKfykNuHiYofoUU8kdsDGsYqVkPLeBoTpSs14kU16b/xpFoJLeOJVBlrUQEV1TC0jCcyapIWvwV6tgahRTyZXn2P3nCDk6z6I87Nd14UvKZ3oWUph3oEfXgTWpaSAFPZmoYWpSTerIZG9ULLUg5dMCNqFFqWcuikGpq/OxCb1iaql9CilAQMRD37C0thgjl45aobWpaSUNY9VbehRSmJVWQt4v246hF/XiIMxK+4lEemfU8aDnF5bJJ/vKG2nixwj186lozytWKLdCAVjRr70fARVlC+UXM/Gg7zY41/QMNRgYFY+BEccytvb+lVIyL+fK6Mh5qZvDvBlWjtScGrKQakjOYwBdoUamRAUeVt0X0Nq2DdYGlr2+iZbbN6th1k2vydNGjoLSU0xlXwNRGS28XlFvYxRAOmSb0+ubfvu7plb3SNjrC3NXcPXFO1YBtBR0cb3qPc2MCWumbb7B5V3E43/C3XBq1UsGjGtoFVVo5gvZV9A3Nik9jPHjNeC1wjsm26OFhZj7m/tYM1J9ODf8tj2GSEf5W1wR0MyrErZbCsRrFPYYx/y2Poq59OlCZvIBaIBYxRQ/Y2GL5s+Qxf7sJRsSXPiQsXePZV7Gf2Ni8QgvaaeP6HMzg7UaJJYWeRqvXhdYtr0jPwuryfKvUxjAsMsgbMIqyhBoui21yTfoEhXwbJKjhNQb1xbQYQWP3HNbmBN3DDNVnYhYzxnM77D8T/5Jo8WvH54pRP+5bypu4lfdlr0dOpMh/HP4wLczMcGE1+NsJu5sZYb53a+5rvJAKGo1hLtrRTDZ8Qf7WlV6zTBn5DLcevK4UJ5oK5eQQd03vuLmtwyLi6h6F9TDXvWXVYBbOjDLo5euWEW0Efcho27ZPMsZgl8X5w6TC3j591vSczbcXnLAEuPrxXYS0hHMVZRHBejWFa9G18gw3AjJyV6HnkLk4PpxrGZemh08nIj24p9wzmBTyL0sCnyw3EFrRgNKzCezxj3vRPMEreh6HjEevG2w3FAgtTPskGN1DXYbb0Ld4g2BOi8gOMQfx8aTCQxmWToIFhGmi4g/dh6DrfFQZD/LR3Of0vVQnptg1S7alcEX+CYX4m0I0ACl5tWvlSnRN+7VEm+eXuZ8WEKRmY+9OQtTfl0pvpw6KdB93wlcLP8tQ6MEEY8se9j5ibGPw8VEHyDVg8E6nWHgpycKayfzUBtUmaE78PLgMbBykXjNVGgybB1K4cKnpKXo9S/U1EXX+BCECgYZiJyZOr4DpeJyXcLRySlMuWHGaw68O0wgzDJMxSSzUgA0kdjCeSy4878GxXZKwH3O7Wf+eU+hgeDwTlDwQpMMxBhtE6Bh5QsD1Ic4xlkq/RAQ3BZYjIqbJ+cAVaPn2MC5M+xxMEC8nLS5v6pI0B+kzhKso79/lRlCnEhMnLkFWiKxC+IsrJI+QjWeXzmL6mRrcpIWCc0io82D4k4+aT1yi1JaGsYcI1hqOoF8lGvQ1dCLOBYUqFs21KxmcJxj51LNyn1uAQMdXP1G9DiCL/lwMOw8TiQTc8EpcPJEAxlkUt4K01NIbNLfrgA3MTxEAcg5C0htBJVKTQ+myGz275AB0ryiI6eVRqIsrVsIuxyKAF8+l0EC90qDdthPFEQgcnYkxcdd7wsLuPcCwRA7E/yyuXGcE7XCH6/6NAEYMXmnne8WRt10eU22Ydb0M63hvc83B+qY8BBiK5AsKCLcIeoFt6vz9Kne4PfEZFFacLYg2I2X5CTMyCE2uvOb7+XkswCFASoihjmud6o1tKpHZurbekg2/8X+WNF7DalF+W9qEhJ6lX+2yi1fllPg48YEKv9kqAt2mcJp4uuYvJ9fb+xcgmT3MK5zwBoYjYv9bRNzCgar5fiiIDeQ/iIvxi8GF41as4alRobC4782GNaZyFCVJ5ZRUdltM5MoS+xl7xXQlFAdVRJUDPQr4pN0ETfhjGi4AyN0GFKMHY56nIQPwh/nbJ5PEAAZW0TnKH/T/+kPsRQaxgFH4mvXIsomFrLn7K0yW8o5mTMj6G12dkGCjjtEfHLuVI7/NPANVRUZCaEA84m8v+6NlRTnT6tx9xxtDDTKjXTR8ewWTt7z/EjcbZrHcRFvr8OBbxIrys89OB6HXO/pjfzYejorqdn3gQzfgyfLUMI2eNyFUMH0HUXi8uxWOzvGZWUCefRKMjpe4v6lzG2+33VfAPVXNu0FKDi5mYewN1+OSLY9jdzahLOV5zMlNupeQ5Nb0ML3CyLS0UxRRA+GZT5nk8OlTdpcPBg7FPoxU8Ihy7M+4EqL8Ft/mTachDanb3yHwQOkHqHE+XHFCn20Zl+nTWPszMNTWxv9DeuhuKgh8cju6aUevhqN69Gzi7maIxd+qMQwdy4YnPtxzX+9UP5SSfws6nmFvDRN+d46QWmQo7UJMSL03SMEgXVDSBKxXecWWIeew7m9w1hTbzOAVsuICuQ4Fw4GqTtDTLZHcDw4taKEUNs3FNd4lPw55XPLHOTHZjEkbBud2vLljO4MZA+s/hdgA74CGRmfBF31qQQkfIMYdOTVtp4jhoXVtP1WwF7cT5eLKF458KbIxkykyh2iqwhmm6KVua101ttinUh+t0908tW5EzjS5Bw8mzthq60t3ZAm7zXGAc2s4ymdMlugF34rtM4VizlTOXwsgqNJcucdeG0+M3OJcGDds4cmBJgXN2VZEIMXoNLXxMWNcW2B5WwbjHKqbiLdCrPNqnWacnaAzxK7VCf/OShvhF7Je+9ev9240NadSMfi4UaWk6rp/5GNfrw6brlwYOZSx2G1t2o+4rFAibBk3OCUsZ8KDJ2K3ZxRNBv0q0LVmDgzgLnb14W9E5YpCzig4fxxjy0hUuK+wrds+0ClwDnfDgvKdZ4YqfErAkYz1JWRtV5O6bzoBU0ShysxfDGx3Oii7jy8++AsJ7Aqrjvv3iRu2N4kTBCwkJdx6U/hb01mozOfyLLgv1fXe/UdHlfJPNEGNH5svh/oG3PFpZI5huS1UPl/RlRJ1FkhRLZkSTWMX3H8l2vYp/VZv0Hs3L6cCU+dtgV4v2/vPgWHfR/KqNa/y70K+sPcc3Bv+1rx0WBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQhIT/AYsJnkN89ku9AAAAAElFTkSuQmCC',
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
      <Text   style={{
         width: 30,
         height: 30,
         borderRadius: 30 / 2,
         marginLeft: 35,
         position:'absolute',
         top:-2,
         textAlign:'center',
         fontWeight:'600'

        }}>
        1
      </Text>
                   
     
      </TouchableOpacity>
    </View>
  );
};

export default ActionBarImage;
