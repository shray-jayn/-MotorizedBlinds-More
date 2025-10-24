import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const QuickQuoteForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "We'll call you shortly to discuss your project.",
    });
    setName("");
    setPhone("");
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="flex-1"
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" size="lg" className="magnetic">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  );
};

export default QuickQuoteForm;
