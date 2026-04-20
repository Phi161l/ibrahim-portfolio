"use client";

import { useEffect, useState } from "react";

type RotatingRoleProps = {
  roles: string[];
  className?: string;
};

export function RotatingRole({ roles, className = "" }: RotatingRoleProps) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const isComplete = displayText === currentRole;
    const isEmpty = displayText.length === 0;

    let timeout = 110;

    if (isDeleting) {
      timeout = 45;
    } else if (isComplete) {
      timeout = 1200;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        return;
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isEmpty) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        return;
      }

      setIsDeleting(false);
      setIndex((current) => (current + 1) % roles.length);
    }, timeout);

    return () => window.clearTimeout(timer);
  }, [displayText, index, isDeleting, roles]);

  return (
    <span className={`inline-block min-w-[16ch] text-left sm:min-w-[24ch] ${className}`}>
      {displayText}
      <span className="ml-1 inline-block animate-pulse text-[rgba(125,186,125,0.82)]">
        |
      </span>
    </span>
  );
}
