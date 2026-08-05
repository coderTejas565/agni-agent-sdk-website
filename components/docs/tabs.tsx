"use client";

import {
  Children,
  isValidElement,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from "react";



interface TabsProps {

  children: ReactNode;

  defaultValue?: string;

  variant?: "default" | "code";

}





interface TabProps {

  title: string;

  value?: string;

  children: ReactNode;

}









export function Tabs({

  children,

  defaultValue,

  variant = "default",

}: TabsProps) {



  const tabs = Children
    .toArray(children)
    .filter(isValidElement)
    as ReactElement<TabProps>[];



  if (!tabs.length) {

    return null;

  }




  const id = useId();



  const getValue = (
    tab: ReactElement<TabProps>
  ) =>
    tab.props.value ??
    tab.props.title;





  const [active,setActive] = useState(

    defaultValue ??
    getValue(tabs[0])

  );





  const buttonsRef =
    useRef<(HTMLButtonElement|null)[]>([]);








  function handleKeyDown(

    event: KeyboardEvent<HTMLButtonElement>,

    index:number

  ) {



    let next = index;



    switch(event.key) {


      case "ArrowRight":

        next =
          (index + 1) % tabs.length;

        break;



      case "ArrowLeft":

        next =
          (index - 1 + tabs.length)
          % tabs.length;

        break;



      case "Home":

        next = 0;

        break;



      case "End":

        next = tabs.length - 1;

        break;



      default:

        return;

    }




    event.preventDefault();



    const value =
      getValue(tabs[next]);



    setActive(value);



    buttonsRef
      .current[next]
      ?.focus();


  }









  return (

    <div

      className={`
      my-8


      overflow-hidden


      rounded-xl


      border

      border-border


      ${
        variant === "code"

        ?

        "bg-[#0d0d0d]"

        :

        "bg-surface"

      }

      `}

    >







      {/* Navigation */}


      <div

        role="tablist"


        className="
        flex

        overflow-x-auto


        border-b

        border-border


        scrollbar-none

        "

      >




        {tabs.map((tab,index)=>{


          const value =
            getValue(tab);



          const selected =
            value === active;





          return (

            <button

              key={value}


              ref={(element)=>{

                buttonsRef.current[index] =
                  element;

              }}



              role="tab"


              aria-selected={selected}


              aria-controls={`${id}-${value}`}


              tabIndex={
                selected ? 0 : -1
              }



              onClick={()=>setActive(value)}



              onKeyDown={(event)=>
                handleKeyDown(
                  event,
                  index
                )
              }



              className={`

              relative


              shrink-0


              px-4

              py-3


              font-mono


              text-xs


              tracking-wide


              transition-colors


              ${
                selected

                ?

                `
                text-primary

                `

                :

                `
                text-muted

                hover:text-foreground

                `
              }


              `}

            >


              {tab.props.title}






              {selected && (

                <span

                  className="
                  absolute


                  bottom-0


                  left-2


                  right-2


                  h-[2px]


                  rounded-full


                  bg-primary


                  "

                />

              )}



            </button>

          );

        })}



      </div>









      {/* Content */}


      <div

        className="
        p-5


        animate-in

        fade-in

        duration-200


        [&_pre]:my-0

        "

      >



        {tabs.map((tab)=>{


          const value =
            getValue(tab);



          if(value !== active) {

            return null;

          }



          return (

            <div

              key={value}


              role="tabpanel"


              id={`${id}-${value}`}


              className="
              text-sm

              leading-7

              "

            >

              {tab.props.children}

            </div>

          );


        })}



      </div>




    </div>

  );

}









export function Tab({

  children,

}: TabProps) {


  return children;

}