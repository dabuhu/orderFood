import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { diet, promotion } from "../../entity/Filter";
import { FilterContext } from "../../provider/provider";

export interface SideFilterProps {}

export default function SideFilter(props: SideFilterProps) {
  const {setGlobalDiet,setGlobalPromotion } = useContext(FilterContext);
  
  const [dietChecked, setDietChecked] = useState<string[]>([]);
  const [promotionChecked, setPromotionChecked] = useState<string>('');

  const handleToggle = (value: string) => () => {
    const currentIndex: number = dietChecked.indexOf(value);
    const newChecked: string[] = [...dietChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setDietChecked(newChecked);
    setGlobalDiet(newChecked);
  };
  const handleClearDiet = () => {
    setDietChecked([]);
  };
  const handleClearPromotion = () => {
    setPromotionChecked("");
    setGlobalPromotion('')
  };
  const handleClickPromotion = (promotionName: string) => {
    setPromotionChecked(promotionName);
    setGlobalPromotion(promotionName)
  };
  return (
    <div>
      <List>
        <div className="d-flex justify-content-between px-3 mt-3">
          <h5>Dietary</h5>
          <p className="cursor-pointer" onClick={handleClearDiet}>
            Clear
          </p>
        </div>
        {diet.map((item) => {
          const labelId = `checkbox-list-label-${item.dietId}`;

          return (
            <ListItem key={item.dietId} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(item.dietName)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={dietChecked.indexOf(item.dietName) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={item.dietName} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      {/* promotion */}
      <div className="p-3">
        <div className="d-flex justify-content-between mt-3">
          <h5>Promotions</h5>
          <p className="cursor-pointer" onClick={handleClearPromotion}>
            Clear
          </p>
        </div>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="promotions"
            value={promotionChecked}
            name="radio-buttons-group"
          >
            {promotion?.map((item, index) => (
              <FormControlLabel
                onClick={() => handleClickPromotion(item.promotionName)}
                key={index}
                value={item.promotionName}
                control={<Radio />}
                label={item.promotionName}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
