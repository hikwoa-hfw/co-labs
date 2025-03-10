'use client'
import { useGetUsers } from "@/hooks/useGetUsers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { bioTeams, titleTeams } from "./componentDatas";
import { Skeleton } from "./ui/skeleton";
import { User } from "@/types/user";
import { cormorant, montserrat } from "@/app/font";

const TeamsComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const title = titleTeams;
  const bio = bioTeams;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const fetchedUsers = await useGetUsers(title.length);
        if (fetchedUsers) {
          setUsers(fetchedUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Tambahkan dependency array kosong

  if (loading) {
    return (
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(title.length)].map((_, index) => (
            <div key={index}>
              <Skeleton className="h-80 w-full rounded-xl" />
              <Skeleton className="h-6 w-32 mt-4" />
              <Skeleton className="h-4 w-24 mt-2" />
              
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`w-full py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${montserrat.className}`}>
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-4xl font-bold ${cormorant.className}`}>
          Meet Our Team
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          The passionate individuals behind Co-Labs who are dedicated to creating
          exceptional workspace experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((member, index) => (
          <div key={member.email} className="group">
            <div className="relative h-80 rounded-xl overflow-hidden mb-4">
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold">{`${member.name.first} ${member.name.last}`}</h3>
            <p className="text-gray-600">{title[index]}</p>
            <p className="mt-2 text-gray-700">{member.name.first}{" "}{bio[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsComponent;