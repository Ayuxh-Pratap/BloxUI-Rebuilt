"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from '@/lib/content-templates';
import { LoaderIcon } from 'lucide-react';
import { Editor } from './editor';
import { chatSession } from '@/lib/gemini-ai';
import "./custom.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface templateSlugProps {
  templateSlug: string;
}

const TemplatePage = ({ params }: { params: templateSlugProps }) => {
  const [isLoading, setisLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");

  const selectedTemplate = contentTemplates[5]

  const generateAIContent = async (formData: FormData) => {
    setisLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAIOutput(result.response.text());
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };
  return (
    <div className="w-full">

      <form action={onSubmit}>
        <div className="flex flex-col gap-4 mt-5">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label htmlFor="">{form.label}</label>
              {form.field === 'input' ? (
                <div className='mt-5'><Select name='title'>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hero">hero</SelectItem>
                    <SelectItem value="about">about</SelectItem>
                    <SelectItem value="services">services</SelectItem>
                    <SelectItem value="contact">contact</SelectItem>
                  </SelectContent>
                </Select></div>
              ) : <div className='mt-5'><Textarea name='description'></Textarea></div>}
            </div>
          ))}
        </div>
        <Button className="mt-5" type="submit">
          {isLoading ? (<LoaderIcon className='animate-spin'></LoaderIcon>) : "Generate Content"}
        </Button>
      </form>
      <div className="my-10">
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div >

  )
}

export default TemplatePage