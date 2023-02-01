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

function Faq() {
  return (

    <Flex display="column" className={style.body}>

    <Box maxH="100px" mt="-20px">
        <Link to="/">
            <Button leftIcon={<AiOutlineArrowLeft />} bg="#fe4e5b" _hover={{bg:"#e1495e"}} variant='solid' w="75px">
                Volver
            </Button>
        </Link>

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
        <Text p="10px" color="#FF66F8">General</Text> 

            <AccordionItem bgColor="blackAlpha.300">
                
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Qué es Talkap?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                
                <AccordionPanel pb={5}>
                Talkap es una aplicación de mensajería enfocada en la facilidad, es rápida, simple y gratuita, Puedes usarla en cualquier dispositivo. Con Talkap puedes crear tus propio grupo de solo amigos o compañeros, además de enviar mensajes, fotos, videos y archivos de cualquier tipo (doc, zip, mp3, etc.).
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.300">

                
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Quiénes son las personas que están detrás de Talkap?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
               
                <AccordionPanel pb={5}>
                Talkap fue creado por desarrolladores full stack con el objetivo de ser el proyecto grupal del bootcamp Soy Henry, además de eso, fue pensado para innovar y facilitar la vida de las personas dando una comunicación fácil, rapida y segura.
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.300">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿En qué se diferencia de WhatsApp?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={5}>
                    A diferencia de WhatsApp, Talkap te da la facilidad de conectarte sin necesidad de guardar un número de teléfono, es tan simple como registrarte y ya puedes interactuar con las demás personas, personalizar tus datos, crear tus grupos y compartir archivos.
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.300">
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Cómo puedo crear una cuenta en Talkap?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={5}>
                    Para crearte una cuenta en Talkap solo debes ingresar al botón "Registrarse" que aparece en la pantalla principal. allí podrás crear una cuenta con una direccion de email nueva o vincular tu cuenta de google. 
                </AccordionPanel>

            </AccordionItem>

{/* ------------------------------------------------------------------------------------------ */}

            <Text p="10px" color="#FF66F8">Sobre mi cuenta</Text>

            <AccordionItem bgColor="blackAlpha.300">

                
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

            <AccordionItem bgColor="blackAlpha.300">

                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿A quién puedo enviar mensajes?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={5}>
                    Puedes enviarle mensaje a cualquier persona que escriba por el grupo general o por los grupos en los que estés, ¡así de fácil es hacer amigos con Talkap!.
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.300">
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


                <AccordionItem bgColor="blackAlpha.300">
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

                <AccordionItem bgColor="blackAlpha.300">
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

                </AccordionItem>


{/* ------------------------------------------------------------------------------------------ */}

            <Text p="10px" color="#FF66F8">Cuenta Premium</Text> 

            <AccordionItem bgColor="blackAlpha.300">
                
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    ¿Por qué tener cuenta premium?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                
                <AccordionPanel pb={5}>
                    El tener Premium te permite personalizar aun más tu cuenta, puedes cambiar el fondo de los chats, quitar la publicidad, enviar videos de cualquier peso, y no sé que más tendrá el premium :)
                </AccordionPanel>

            </AccordionItem>

            <AccordionItem bgColor="blackAlpha.300">

                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    ¿Cómo obtener cuenta premium?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                
                <AccordionPanel pb={5}>
                    En el menú izquierdo encontraras un botón llamado "Premium", cuando ingreses alli solo tienes que seguir los pasos para llenar la información pedida, ¡Así de facil es ser Premium!
                </AccordionPanel>

            </AccordionItem>
            <AccordionItem bgColor="blackAlpha.300">

               
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        ¿Cuál es el valor de la cuenta premium?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                
                <AccordionPanel pb={5}>
                    El valor de comprar el modo Premium está en $1.00, ¡Economico y divertido!
                </AccordionPanel>

            </AccordionItem>
        </Accordion>
        </Flex>
        </Box>
    </Flex>
  )
}

export default Faq