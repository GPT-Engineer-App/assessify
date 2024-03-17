import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Textarea, Select, Image, useToast } from "@chakra-ui/react";
import { FaBook, FaCheck, FaRocket } from "react-icons/fa";

const Index = () => {
  const [material, setMaterial] = useState("");
  const [questionType, setQuestionType] = useState("multiple");
  const toast = useToast();

  const handleSubmit = () => {
    if (material.trim() === "") {
      toast({
        title: "Please enter learning material",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // TODO: Implement API call to generate assessment
    toast({
      title: "Assessment generated!",
      description: "Your engaging digital assessment is ready.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} alignItems="center">
        <Heading as="h1" size="2xl">
          Transform Learning Materials into Digital Assessments
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Swiftly convert your learning materials into engaging digital assessments for your students.
        </Text>
        <Image src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwb25saW5lfGVufDB8fHx8MTcxMDY2MzIzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Students learning online" />
        <Image src="https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY3JlYXRpbmclMjBhc3Nlc3NtZW50fGVufDB8fHx8MTcxMDY2MzIzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Teacher creating an online assessment" />
        <Image src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcmV2aWV3aW5nJTIwcXVlc3Rpb25zfGVufDB8fHx8MTcxMDY2MzIzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Teacher reviewing and refining assessment questions" />
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcmV2aWV3aW5nJTIwcXVlc3Rpb25zJTIwb24lMjBjb21wdXRlcnxlbnwwfHx8fDE3MTA2NjMyMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Teacher reviewing assessment questions on computer for quality assurance" />
        <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc2VsZWN0aW5nJTIwcXVlc3Rpb25zfGVufDB8fHx8MTcxMDY2MzIzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Teacher curating a question bank by selecting the most relevant questions" />
        <Textarea value={material} onChange={(e) => setMaterial(e.target.value)} placeholder="Paste your learning material here..." size="lg" minHeight="200px" />
        <Select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
          <option value="multiple">Multiple Choice</option>
          <option value="truefalse">True/False</option>
          <option value="shortanswer">Short Answer</option>
        </Select>
        <Button leftIcon={<FaRocket />} colorScheme="blue" size="lg" onClick={handleSubmit}>
          Generate Assessment
        </Button>
      </VStack>
      <Box mt={12}>
        <Heading as="h2" size="xl" mb={4}>
          <FaBook /> How it Works
        </Heading>
        <Text fontSize="lg">
          <FaCheck color="green.500" /> Paste your learning material into the text area
          <br />
          <FaCheck color="green.500" /> Select the type of questions you want to generate
          <br />
          <FaCheck color="green.500" /> Click the "Generate Assessment" button
          <br />
          <FaCheck color="green.500" /> Your engaging digital assessment will be ready in seconds!
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
