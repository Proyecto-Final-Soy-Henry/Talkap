import React from 'react'
import style from './Faq.module.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Image,
    Button,
    Text
  } from '@chakra-ui/react'
import faq from "../../assets/faq.png"
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Badge } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";

function Faq() {

    const { loginWithRedirect } = useAuth0();
  return (

    <Flex display="column" className={style.body}>

    <Box maxH="100px" mt="-20px">
    <div className={style.btn}>
        <Link to="/">
            <Button 
            leftIcon={<AiOutlineArrowLeft />} 
            bg="#fe4e5b" 
            _hover={{bg:"#e1495e"}} 
            variant='solid' 
            w="75px"
            position="fixed"
            top="5"
            >
                Volver
            </Button>
        </Link>
        </div>

    <Flex justify="space-around">
        
        <Flex display="column" mt="10%">
           
                <Text as="b" fontSize='3xl'>Preguntas Frecuentes</Text><br/>
                <Text fontSize='xl' as='i'> Estas FAQ buscan aclarar dudas básicas sobre Talkap.</Text>
            
        </Flex> 
        <Image src={faq} alt="faq" className={style.img}/> 
        
    </Flex>

    <Flex justify="center" pb="50px">
        <Accordion allowMultiple w="70%">

{/* ------------------------------------------------------------------------------------------ */}
        <Text as="b" fontSize={"lg"} color="#fe4e5b">General</Text> 

            <AccordionItem bgColor="blackAlpha.500" mt="15px">
                
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Qué es Talkap?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                
                <AccordionPanel pb={5}>
                
                   
                Talkap es una aplicación de mensajería enfocada en la  <Badge colorScheme='telegram'> facilidad </Badge>, es <Badge  colorScheme='red'> rápida </Badge> , <Badge  colorScheme='purple'> simple </Badge> y <Badge  colorScheme='green'> gratuita </Badge>, Puedes usarla en cualquier dispositivo. Con Talkap puedes crear tus propio grupo de solo amigos y/o compañeros, además de enviar mensajes, fotos, videos y archivos de cualquier tipo (doc, zip, mp3, etc.).
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.500">

                
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Quiénes son las personas que están detrás de Talkap?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={5}>
                Talkap fue creado por estudiantes de desarrollo full stack con el objetivo de ser el proyecto grupal del bootcamp <Badge colorScheme='yellow'> Soy Henry </Badge>, además de eso, fue pensado para <Badge colorScheme='facebook'>innovar</Badge> y <Badge colorScheme='green'>facilitar</Badge> la vida de las personas dando una comunicación fácil, rapida y segura. puedes ver más sobre nosotros <Link to="/aboutUs">
                        <Button 
                        bg="red"
                        h="20px"
                        w="5px"
                        ml="6px"
                        p="3px"
                        _hover={{bg:"#fe4e5b"}}> Aquí </Button>
                    </Link>
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.500">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿En qué se diferencia de otras aplicaciones?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={5}>
                    Una gran <Badge colorScheme='purple'> ventaja </Badge> de Talkap, es que te da la facilidad de conectarte sin necesidad de guardar un número de teléfono, es tan simple como registrarte y ya puedes interactuar con las demás personas, personalizar tus datos, crear tus grupos y compartir archivos.
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.500">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Cómo puedo crear una cuenta en Talkap?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={5}>
                    Para crearte una cuenta en Talkap puedes hacer click 
                    <Button
                        bg="red"
                        h="20px"
                        w="5px"
                        ml="6px"
                        p="3px"
                        _hover={{bg:"#fe4e5b"}}
                        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}> 
                    Aquí 
                     </Button> o ingresar al botón "Registrarse" que aparece en la pantalla principal. podrás crear una cuenta con un email nuevo o vincular tu cuenta de google. 
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.500" mb="15px">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Cómo puedo donar a los creadores?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={5}>
                   Para apoyarnos solo debes ingresar a Talkap y al lado de tu foto de perfil verás la opcion para donar, al darle click te redireccionara para completar el proceso.
                </AccordionPanel>
                </AccordionItem>

               

{/* ------------------------------------------------------------------------------------------ */}

        <Text as="b" fontSize={"lg"} color="#fe4e5b">Sobre mi cuenta</Text> 

            <AccordionItem bgColor="blackAlpha.500" mt="15px">

        
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    ¿Cómo agrego a alguien a mis amigos?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                
                <AccordionPanel pb={5}>
                    Para añadir a alguien a tu lista de amigos solo debes darle click a su foto de perfil, y en el menú desplegable verás la opción "Añadir a Amigos", también tienes la opción de añadirlo a tus amigos desde su perfil.
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.500">

                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿A quién puedo enviar mensajes?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={5}>
                    Puedes enviarle mensaje a cualquier persona que escriba por el grupo general o por los grupos en los que estés, ¡así de fácil es hacer amigos con Talkap!
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.500">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Quién puede enviarme mensajes?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={5}>
                    Cualquier persona a la que le permitas enviarte mensajes, recuerda que también tienes la opción de bloquear a una persona desde su perfil.
                </AccordionPanel>
                </AccordionItem>


                <AccordionItem bgColor="blackAlpha.500">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Cómo puedo bloquear a alguien?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={5}>
                    Para bloquear a una persona en Talkap, solo debes clickear en su imagen de perfil, ir a la opción "ver perfil" y en la parte de abajo te aparecerá una opción para bloquear a ese usuario.
                </AccordionPanel>
                </AccordionItem>

                <AccordionItem bgColor="blackAlpha.500">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Qué pasa si he sido baneado?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={5}>
                   Cuando tu cuenta es baneada recibirás un correo de parte del equipo de Talkap dandote más detalles, puedes solicitar ser desbaneado respondiendo a ese mismo correo.
                </AccordionPanel>
                </AccordionItem>

                {/* <AccordionItem bgColor="blackAlpha.500">
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        ¿Puedo eliminar mi cuenta de Talkap?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={5}>
                    Si deseas eliminar tu cuenta, puedes hacerlo en la parte de tu perfil. Al borrar tu cuenta se eliminan permanentemente todos tus mensajes, grupos y contactos. Todos los grupos y canales que hayas creado quedarán sin un creador pero los administradores mantendrán sus privilegios.
                    Esta acción no puede deshacerse.
                    </AccordionPanel>

                </AccordionItem> */}

        </Accordion>
        </Flex>
        </Box>
    </Flex>
  )
}

export default Faq