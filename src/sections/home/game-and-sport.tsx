import { Checkbox, CheckboxWithInput, Input, Select, Textarea } from "@/components/global-components/form-inputs";

const GameAndSport = () => {

    return (
        <div className="text-white">
            <Input
                label="Username*"
                type="password"
            />
            <Select
                label="Role*"
                options={[{ value: "user", label: "User" }, { value: "admin", label: "Admin" }]}
            />
            <Textarea
                label="Bio"
                optional
                placeholder="Tell us about yourself..."
            />
            
            <Checkbox />

            <CheckboxWithInput
                checkboxLabel="Enable custom name"
                inputLabel="Your custom name"
            />
        </div>
    );
};

export default GameAndSport;