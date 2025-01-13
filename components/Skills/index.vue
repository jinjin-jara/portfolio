<template>
    <PageSection section-id="skills">
        <div class="flex flex-col gap-6 pb-8">
            <PageTitle>
                <template #icon="{ size }">
                    <img src="/portfolio/skills.png" :class="[size]" />
                </template>
                <p>Skills <span class="text-xl lg:text-2xl">&</span> Tools</p>
            </PageTitle>
            <SkillsComponent title="Langauge">
                <SkillsCard title="javascript">
                    <template #image>
                        <img src="/portfolio/javascript.png" />
                    </template>
                </SkillsCard>
                <SkillsCard title="typescript">
                    <template #image>
                        <img src="/portfolio/typescript.png" />
                    </template>
                </SkillsCard>
                <SkillsCard title="Java" level="중급">
                    <template #image>
                        <img src="/portfolio/java.png" />
                    </template>
                </SkillsCard>
                <SkillsCard title="Swift" level="초급">
                    <template #image>
                        <img src="/portfolio/swift.png" />
                    </template>
                </SkillsCard>
            </SkillsComponent>
            <SkillsComponent title="Framework / Library">
                <SkillsCard title="Vue">
                    <template #image>
                        <img src="/portfolio/vue.png" />
                    </template>
                </SkillsCard>
                <SkillsCard title="Nuxt">
                    <template #image>
                        <img src="/portfolio/nuxt.png" />
                    </template>
                </SkillsCard>
                <SkillsCard title="React" level="초급">
                    <template #image>
                        <img src="/portfolio/react.png" />
                    </template>
                </SkillsCard>
                <SkillsCard title="Spring Boot" level="중급">
                    <template #image>
                        <img src="/portfolio/springboot.png" />
                    </template>
                </SkillsCard>
            </SkillsComponent>
            <SkillsComponent title="Database">
                <SkillsCard title="postgresql" level="중급">
                    <template #image>
                        <img src="/portfolio/postgresql.png" />
                    </template>
                </SkillsCard>
            </SkillsComponent>
            <SkillsComponent title="Tools">
                <SkillsCard title="Figma" level="중급">
                    <template #image>
                        <img src="/portfolio/figma.png" />
                    </template>
                </SkillsCard>
                <SkillsCard title="Docker" level="중급">
                    <template #image>
                        <img src="/portfolio/docker.png" />
                    </template>
                </SkillsCard>
                <div class="col-span-2 flex flex-row items-center gap-2">
                    <SkillsCard title="jira" :none-level="true">
                        <template #image>
                            <img src="/portfolio/jira.png" />
                        </template>
                    </SkillsCard>
                    <SkillsCard title="gitlab" :none-level="true">
                        <template #image>
                            <img src="/portfolio/gitlab.png" />
                        </template>
                    </SkillsCard>
                    <SkillsCard title="github" :none-level="true">
                        <template #image>
                            <img src="/portfolio/github.png" />
                        </template>
                    </SkillsCard>
                    <SkillsCard title="notion" :none-level="true">
                        <template #image>
                            <img src="/portfolio/notion.png" />
                        </template>
                    </SkillsCard>
                </div>
            </SkillsComponent>
        </div>
        <Border />
    </PageSection>
</template>