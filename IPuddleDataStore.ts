/*
   Copyright 2020 Trevor Manley

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import { IPuddleObject } from "./IPuddleObject";

export interface IPuddleDataStore {
    /**
     * The name of the data store
     * Can be used for display or by message handlers
     */
    name:string;
    /**
     * Add a object to the data store
     * @param obj The Puddle object to add
     */
    add(obj : IPuddleObject) : void ;
    /**
     * Remove an object from the data store
     * @param obj The Puddle object to remove
     */
    remove(obj : IPuddleObject) : void;  
}