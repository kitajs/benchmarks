<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Mon Mar 03 2025 01:31:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 48468.0    | 20.16        | 8.64          |
| polkadot                 | 1.0.0    | ✗      | 47575.2    | 20.52        | 8.48          |
| kita                     | 1.1.36   | ✓      | 47358.4    | 20.61        | 8.49          |
| polka                    | 0.5.2    | ✓      | 47118.4    | 20.72        | 8.40          |
| 0http                    | 3.5.3    | ✓      | 46886.4    | 20.84        | 8.36          |
| rayo                     | 1.4.6    | ✓      | 46860.8    | 20.83        | 8.36          |
| fastify                  | 4.29.0   | ✓      | 46589.6    | 20.94        | 8.35          |
| connect                  | 3.7.0    | ✗      | 46413.4    | 21.02        | 8.28          |
| server-base-router       | 7.1.32   | ✓      | 46148.0    | 21.16        | 8.23          |
| server-base              | 7.1.32   | ✗      | 45917.6    | 21.28        | 8.19          |
| h3                       | 1.15.1   | ✗      | 45331.2    | 21.57        | 8.08          |
| h3-router                | 1.15.1   | ✓      | 44520.8    | 21.96        | 7.94          |
| connect-router           | 1.3.8    | ✓      | 44255.2    | 22.12        | 7.89          |
| restana                  | 4.9.9    | ✓      | 41352.8    | 23.68        | 7.37          |
| hono                     | 4.7.2    | ✓      | 40952.0    | 23.90        | 6.72          |
| koa                      | 2.16.0   | ✗      | 37758.4    | 25.99        | 6.73          |
| restify                  | 11.1.0   | ✓      | 35544.6    | 27.62        | 6.41          |
| take-five                | 2.0.0    | ✓      | 35393.8    | 27.76        | 12.72         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35363.0    | 27.77        | 6.31          |
| koa-router               | 12.0.1   | ✓      | 33783.6    | 29.09        | 6.02          |
| hapi                     | 21.3.12  | ✓      | 32131.2    | 30.62        | 5.73          |
| fastify-big-json         | 4.29.0   | ✓      | 12031.4    | 82.55        | 138.43        |
| express                  | 4.21.2   | ✓      | 11261.4    | 88.18        | 2.01          |
| express-with-middlewares | 4.21.2   | ✓      | 10704.4    | 92.82        | 3.98          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
